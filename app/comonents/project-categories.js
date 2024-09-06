"use client";
import React, { useState } from "react";

const categoryImages = {
  "SHOW ALL": [
    "https://cdn.standardmedia.co.ke/images/thursday/qlyxon3dg4y87novk457fea6634fccf.jpg",
    "https://www.turingfoundation.org/img/foto_childslife11.jpg",
    "https://constructionreviewonline.com/wp-content/uploads/2024/01/Lappset-Image-1.jpg",
    "https://www.vibramainvestmentsltd.co.ke/img/Vibrama/kenya_road.png",
    "https://ub.co.ke/wp-content/uploads/2019/11/crest-house-ujenzi-143-bora-build-in-kenya-from-diaspora-podcity-720x720.jpg",
    "https://pbs.twimg.com/media/Fs7fOUIXoAI4e78.jpg",
  ],
  COMMERCIAL: [
    "https://cdn.standardmedia.co.ke/images/thursday/qlyxon3dg4y87novk457fea6634fccf.jpg",
    "https://famio.co.ke/wp-content/uploads/2018/11/Top-5construction-companies-projects-in-Kenya.jpeg",
    "https://african.land/oc-content/plugins/blog/img/blog/415.jpg",
  ],
  EDUCATION: [
    "https://www.turingfoundation.org/img/foto_childslife11.jpg",
    "https://cdn.standardmedia.co.ke/images/friday/precolonial_school_5ff872b85f25b.jpg",
    "https://constructionreviewonline.com/wp-content/uploads/2020/01/School.jpg",
  ],
  GOVERNMENT: [
    "https://constructionreviewonline.com/wp-content/uploads/2024/01/Lappset-Image-1.jpg",
    " https://www.kenyanews.go.ke/wp-content/uploads/2021/06/Construction-1200x630.jpg",
    "https://pbs.twimg.com/media/GShFfy5XUAEuOsD?format=jpg&name=large",
  ],
  INFRASTRUCTURE: [
    "https://www.vibramainvestmentsltd.co.ke/img/Vibrama/kenya_road.png",
    "https://krc.co.ke/wp-content/uploads/2022/02/fecc3c0c-2b9e-4a30-a535-e31e01a00cce-1024x676.jpg",
    "https://www.kenyanews.go.ke/wp-content/uploads/2023/12/kiambu-stage-infrastructure.jpg",
  ],
  RESIDENTIAL: [
    "https://ub.co.ke/wp-content/uploads/2019/11/crest-house-ujenzi-143-bora-build-in-kenya-from-diaspora-podcity-720x720.jpg",
    "https://mkenyaujerumani.de/wp-content/uploads/2016/09/House-under-construction.jpg",
    "https://4.bp.blogspot.com/-0vyRi8F9Mk8/Ub8M_5QFunI/AAAAAAAAT0Y/tZTsaCTVE_A/s1600/Contemporary_Style_Home_in_Burlingame_California_on_world_of_architecture_02.jpg",
  ],
  HEALTHCARE: [
    "https://pbs.twimg.com/media/Fs7fOUIXoAI4e78.jpg",
    "https://cceonlinenews.com/wp-content/uploads/2020/10/Kenyas-Tenwek-Hospital-mulls-construction-of-cardiothoracic-centre.jpg",
    "https://constructiontoday.co.ke/wp-content/uploads/2021/08/kenyatta-referela.jpg",
  ],
};

function ProjectCategories() {
  const [selectedCategory, setSelectedCategory] = useState("SHOW ALL");

  return (
    <div className="project-categories bg-white py-12 px-4">
      {/* Categories Menu */}
      <div className="text-center mb-8">
        <ul className="flex flex-wrap justify-center space-x-4">
          {Object.keys(categoryImages).map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`text-gray-700 hover:text-orange-500 ${
                  selectedCategory === category
                    ? "font-bold text-orange-500"
                    : ""
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {categoryImages[selectedCategory].map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={selectedCategory}
              className="w-full h-64 object-cover" // Fixed height for images
            />
          </div>
        ))}
      </div>
      {/* Centered Button */}
      <div className="text-center p-6 mt-7">
        <a href="/projects" >
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            View More
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCategories;
