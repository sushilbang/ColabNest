import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import TagInput from "@/components/ui/TagInput.jsx";
import { toast } from "sonner";
import {userStore} from '@/stores/user.store.js';
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    fname:"",
    lname:"",
    about: "",
    skills: [],
    experience: "",
    education: "",
    linkedin: "",
    github: "",
  });
  const [previewURL, setPreviewURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const updateUserDetails = userStore((state) => state.updateUserDetails);
  const user = userStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        fname: user.fname || "",
        lname: user.lname || "",
        about: user.about || "",
        skills: user.skills || [],
        experience: user.experience || "",
        education: user.education || "",
        linkedin: user.linkedin || "",
        github: user.github || "",
      });
      if (user.profilePicture) {
        setPreviewURL(user.profilePicture);
      }
    }
  }, [user]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePicture: file }));
      setPreviewURL(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("fname", formData.fname);
      formDataToSend.append("lname", formData.lname);
      formDataToSend.append("about", formData.about);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("education", formData.education);
      formDataToSend.append("linkedin", formData.linkedin);
      formDataToSend.append("github", formData.github);
      formDataToSend.append("skills", JSON.stringify(formData.skills));

      if (formData.profilePicture) {
        formDataToSend.append("profilePicture", formData.profilePicture);
      }

      const res = await updateUserDetails(formDataToSend);
      if(res) {
        toast.success("Profile updated successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, profilePicture: null }));
    setPreviewURL(null);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sm:p-8 float-up">
          <h1 className="text-2xl font-semibold text-neutral-800 mb-1">Profile</h1>
          <p className="text-neutral-500 mb-8">Complete your profile information</p>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Profile Picture
              </label>
              <div
                {...getRootProps()}
                className={`relative cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition-colors
                  ${
                    isDragActive
                      ? "border-neutral-400 bg-neutral-50"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
              >
                <input {...getInputProps()} />
                {previewURL ? (
                  <div className="relative inline-block">
                    <img
                      src={previewURL}
                      alt="Profile preview"
                      className="mx-auto h-32 w-32 rounded-full object-cover scale-fade-in"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                      className="absolute -top-2 -right-2 rounded-full bg-neutral-100 p-1 text-neutral-500 hover:text-neutral-700 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="mx-auto h-8 w-8 text-neutral-400" />
                    <p className="text-sm text-neutral-500">
                      Drag & drop an image or click to select
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* First and last name */}
            <div className="grid grid-cols-2 gap-6"> {/* Grid for side-by-side inputs */}
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  value={formData.fname}
                  onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                  required // Make first name required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="fname"
                  value={formData.lname}
                  onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                  required // Make last name required
                />
              </div>
            </div>
            {/* About */}
            <div className="space-y-2">
              <label htmlFor="about" className="block text-sm font-medium text-neutral-700">
                About
              </label>
              <textarea
                id="about"
                value={formData.about}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, about: e.target.value }))
                }
                rows={4}
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                placeholder="Tell us about yourself..."
              />
            </div>
            {/* Skills */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Skills
              </label>
              <TagInput
                value={formData.skills}
                onChange={(skills) =>
                  setFormData((prev) => ({ ...prev, skills: skills }))
                }
                placeholder="Type a skill and press enter..."
              />
            </div>
            {/* Experience */}
            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium text-neutral-700">
                Experience
              </label>
              <textarea
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, experience: e.target.value }))
                }
                rows={3}
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                placeholder="Share your work experience..."
              />
            </div>
            {/* Education */}
            <div className="space-y-2">
              <label htmlFor="education" className="block text-sm font-medium text-neutral-700">
                Education
              </label>
              <textarea
                id="education"
                value={formData.education}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, education: e.target.value }))
                }
                rows={3}
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                placeholder="List your educational background..."
              />
            </div>
            {/* Social Links */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="linkedin" className="block text-sm font-medium text-neutral-700">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, linkedin: e.target.value }))
                  }
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="github" className="block text-sm font-medium text-neutral-700">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  id="github"
                  value={formData.github}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, github: e.target.value }))
                  }
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm input-transition input-ring"
                  placeholder="https://github.com/..."
                />
              </div>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white
                   transition-all duration-200 hover:bg-blue-400 disabled:opacity-70
                   disabled:cursor-not-allowed hover-lift`}
              >
                {loading ? "Updating Profile..." : "Save Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;