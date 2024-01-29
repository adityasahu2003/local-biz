// const Categories = () => {

//     return(
//         <>
//             <div className="bg-slate-300">
//                 <div className="container mx-auto p-8">
//                     <h1 className="text-center text-3xl font-bold">Categories</h1>
//                     <div className="my-8 grid md:grid-cols-3 grid-cols-1 gap-4">
//                         <div className="p-12 bg-white shadow-xl flex justify-center items-center hover:shadow-md">
//                             <h1 className="text-xl font-bold">Category</h1>
//                         </div>
//                         <div className="p-12 bg-white shadow-xl flex justify-center items-center hover:shadow-md">
//                             <h1 className="text-xl font-bold">Category</h1>
//                         </div>
//                         <div className="p-12 bg-white shadow-xl flex justify-center items-center hover:shadow-md">
//                             <h1 className="text-xl font-bold">Category</h1>
//                         </div>
//                         <div className="p-12 bg-white shadow-xl flex justify-center items-center hover:shadow-md">
//                             <h1 className="text-xl font-bold">Category</h1>
//                         </div>
//                         <div className="p-12 bg-white shadow-xl flex justify-center items-center hover:shadow-md">
//                             <h1 className="text-xl font-bold">Category</h1>
//                         </div>
//                         <div className="p-12 bg-white shadow-xl flex justify-center items-center hover:shadow-md">
//                             <h1 className="text-xl font-bold">Category</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )

// }

// export default Categories
import React, { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryIndex) => {
    setActiveCategory(categoryIndex);
  };

  const categories = ['Careers adviser', 'Engineer', 'Broadcasting (operations)', 'Fine artist', 'Medical illustrator', 'Manufacturing'];

  return (
    <>
      <div className="bg-slate-300">
        <div className="container mx-auto p-8">
          <h1 className="text-center text-3xl font-bold">Categories</h1>
          <div className="my-8 grid md:grid-cols-3 grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`p-12 bg-white shadow-xl flex justify-center border-2 items-center hover:shadow-md ${
                  activeCategory === index ? 'border-slate-500' : ''
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                <h1 className="text-center text-xl font-bold">{category}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
