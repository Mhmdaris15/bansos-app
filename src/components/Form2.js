import { useState } from "react";

const Form2 = props => {
    const [selectedImage, setSelectedImage] = useState(null);


 return (
    <>
     {/* <form className="w-11/12 grid justify-center  grid-flow-row auto-cols-[minmax(0,_3fr)]"> */}
 <form className="w-2/3 mx-auto p-10 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 opacity-80 rounded-lg">
     {/* NAME */}
 <div className="relative z-0 mb-6 w-full group">
   <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
   <label htmlFor="name" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
 </div>
     {/* AGE */}
 <div className="relative z-0 mb-6 w-full group">
   <input type="number" name="age" min={"25"} className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
   <label htmlFor="age" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
 </div>
    {/* KK & KTP Number */}
 <div className="grid xl:grid-cols-2 xl:gap-6">
   <div className="relative z-0 mb-6 w-full group">
     <input type="text" name="NIK" id="NIK" pattern="[0-9]{16}" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="NIK" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIK Number</label>
   </div>
   <div className="relative z-0 mb-6 w-full group">
     <input type="text" name="KK" id="KK" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="KK" patter="[0-9]{16}" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Family Card Number</label>
   </div>
 </div>
    {/* UPLOAD PHOTO */}
 <div className="grid xl:grid-cols-2 xl:gap-6">
 
 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div className="space-y-1 text-center">
    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="flex text-sm text-gray-600">
        {
            selectedImage && (
                <div>
                <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                <br />
                <button onClick={()=>setSelectedImage(null)}>Remove</button>
                </div>
            )
        }
        <label htmlFor="file-upload-kk" className="relative cursor-pointer bg-white rounded-xl font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <span className="p-2">Upload KK Photo</span>
        <input id="file-upload-kk" name="file-upload-kk" type="file" className="sr-only" onChange={(event) => {
            if(this.files[0].size > 2097152){
                alert("File is too big!");
                this.value = "";
            }
            else {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
            }
        }}/>
        </label>
        <p className="pl-1">or drag and drop</p>
    </div>
    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
    </div>
 </div>
 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div className="space-y-1 text-center">
    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="flex text-sm text-gray-600">
        {
            selectedImage && (
                <div>
                <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                <br />
                <button onClick={()=>setSelectedImage(null)}>Remove</button>
                </div>
            )
        }
        <label htmlFor="file-upload-ktp" className="relative cursor-pointer bg-white rounded-xl font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <span className="p-2">Upload KTP Photo</span>
        <input id="file-upload-ktp" name="file-upload-ktp" type="file" className="sr-only" onChange={(event) => {
            if(this.files[0].size > 2097152){
                alert("File is too big!");
                this.value = "";
            }
            else {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
            }
        }}/>
        </label>
        <p className="pl-1">or drag and drop</p>
    </div>
    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
    </div>
 </div>
 </div>
    {/* GENDER */}
 <div className="mt-4 space-y-4 ">
    <div className="flex items-center"> 
        <h1 className="mr-4 text-gray-100" name="gender">Gender : </h1>
        <input id="gender-male" name="gender" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
        <label htmlFor="gender-male" className="ml-2 block text-sm font-medium text-gray-300"> Male </label>
    
        <input id="gender-female" name="gender" type="radio" className="ml-5 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
        <label htmlFor="gender-female" className="ml-2 block text-sm font-medium text-gray-300"> Female </label>
    </div>
  </div>
    {/* ADDRESS */}
  <div className="relative z-0 mb-6 w-full group">
   <input type="text" size={"255"} name="address" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
   <label htmlFor="address" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
 </div>
    {/* RT & RW */}
 <div className="grid xl:grid-cols-2 xl:gap-6">
   <div className="relative z-0 mb-6 w-full group">
     <input type="text" name="rukun_tetangga" id="rukun_tetangga" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="rukun_tetangga" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rukun Tetangga (RT)</label>
   </div>
   <div className="relative z-0 mb-6 w-full group">
     <input type="text" name="rukun_warga" id="rukun_warga" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="rukun_warga" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rukun Warga (RW)</label>
   </div>
 </div>
    {/* KK & KTP Number */}
 <div className="grid xl:grid-cols-2 xl:gap-6">
   <div className="relative z-0 mb-6 w-full group">
     <input type="number" name="before_pandemic" id="before_pandemic" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="before_pandemic" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Income Before Pandemic (Rp)</label>
   </div>
   <div className="relative z-0 mb-6 w-full group">
     <input type="number" name="in_pandemic" id="in_pandemic" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="in_pandemic" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Income (Rp)</label>
   </div>
 </div>
    {/* GENDER */}
  <div className="mt-4 space-y-4 mb-5">
      <h1 className="mr-4 text-gray-100" name="gender">The Reason Why Need Financial Aid : </h1>
          <div className="flex items-center">
            <input id="lostJob" name="TheReason" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label htmlFor="lostJob" className="ml-3 block text-sm font-medium text-gray-200"> Loss of a Job </label>
          </div>
          <div className="flex items-center">
            <input id="headFamilyEffected" name="TheReason" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label htmlFor="headFamilyEffected" className="ml-3 block text-sm font-medium text-gray-200"> Heads of families affected or victims of Covid </label>
          </div>
          <div className="flex items-center">
            <input id="poorCategorized" name="TheReason" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label htmlFor="poorCategorized" className="ml-3 block text-sm font-medium text-gray-200"> Classified as poor/poor since before Covid </label>
          </div>
          <div className="flex items-center">
            <input id="otherReason" name="TheReason" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label htmlFor="otherReason" className="ml-3 block text-sm font-medium text-gray-200"> 
              <input type="text" name="otherReasonInput" id="otherReasonInput" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Other Reason" required />
            </label>
          </div>
    </div>
 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 <button type="reset" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ml-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
</form>
</>
 )
}

export default Form2;