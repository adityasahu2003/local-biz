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
import "./category.css"

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryIndex) => {
    setActiveCategory(categoryIndex);
  };



  return (
    <>
      <div className="bg-slate-300">
        <div className="container mx-auto p-8">
          <h1 className="text-center text-3xl font-bold">Categories</h1>
          <div className="categorybox my-8 grid md:grid-cols-3 grid-cols-2 gap-0">
               <div className="text-center catboxes">Finanace</div>
               <div className="text-center catboxes">Finanace</div>
               <div className="text-center catboxes">Finanace</div>
               <div className="text-center catboxes">Finanace</div>
               <div className="text-center catboxes">Finanace</div>
               <div className="text-center catboxes">Finanace</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
