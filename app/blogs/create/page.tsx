"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleTagKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      event.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handlePublish = () => {
    // TODO: Implement blog publishing logic
    console.log({
      title,
      description,
      content,
      image,
      category,
      tags
    });
    alert("Blog post draft saved!");
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar title="CyberShield" />
      
      <div className="px-6 py-10 flex justify-center">
        <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Create a Blog</h2>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Title:</label>
            <input
              type="text"
              maxLength={100}
              className="w-full bg-gray-800 p-3 rounded-md text-white border border-gray-700 focus:border-blue-500 transition-colors"
              placeholder="Give a title to your Blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="text-gray-500 text-sm mt-1">{title.length}/100 characters</p>
          </div>

          {/* Short Description */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Short Description:</label>
            <textarea
              maxLength={130}
              className="w-full bg-gray-800 p-3 rounded-md text-white border border-gray-700 focus:border-blue-500 transition-colors"
              placeholder="Enter a short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-gray-500 text-sm mt-1">{description.length}/130 characters</p>
          </div>

          {/* Blog Content */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Blog Content:</label>
            <textarea
              rows={6}
              className="w-full bg-gray-800 p-3 rounded-md text-white border border-gray-700 focus:border-blue-500 transition-colors"
              placeholder="Write your blog content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Upload an Image:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="hidden" 
              id="uploadImage" 
            />
            <label
              htmlFor="uploadImage"
              className="bg-purple-500 px-4 py-2 text-white rounded-md cursor-pointer inline-block hover:bg-purple-600 transition-colors"
            >
              Add Image (JPG, JPEG, PNG)
            </label>
            {image && (
              <div className="mt-4 relative">
                <Image 
                  src={image} 
                  alt="Preview" 
                  width={800} 
                  height={400} 
                  className="rounded-md w-full h-64 object-cover" 
                />
                <button 
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Category Selection */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Select Your Category:</label>
            <select
              className="w-full bg-gray-800 p-3 rounded-md text-white border border-gray-700 focus:border-blue-500 transition-colors"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="Network Security">Network Security</option>
              <option value="Malware Analysis">Malware Analysis</option>
              <option value="AI & Security">AI & Security</option>
              <option value="Cloud Security">Cloud Security</option>
              <option value="Threat Intelligence">Threat Intelligence</option>
            </select>
          </div>

          {/* Tags Input */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Add Tags:</label>
            <input
              type="text"
              className="w-full bg-gray-800 p-3 rounded-md text-white border border-gray-700 focus:border-blue-500 transition-colors"
              placeholder="Enter a tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
            <div className="flex flex-wrap mt-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm mr-2 mt-2 flex items-center"
                >
                  {tag}
                  <button 
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-300 hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Publish Button */}
          <button 
            onClick={handlePublish}
            className="w-full bg-blue-500 mt-6 py-3 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
            disabled={!title || !description || !content || !category}
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
}
