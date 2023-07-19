import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import blog from '../../Images/blog.svg'
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

const UploadBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  
  

  const onSubmit = data => {
      
    
    //these code is for uploading img in the imgbb
    const formData = new FormData();
    formData.append('image', data.blogImage[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {blogName, blogDescription} = data;
            const newBlog = {blogName, blogDescription, image:imgURL}
            fetch('http://localhost:5000/blogs',{
                method: "POST",
                headers:{
                    "content-type": "application/json",
                  },
                body: JSON.stringify(newBlog)
                
            })
            .then(res => res.json())
            .then(data => {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added Blog',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(data)});
            // console.log(newBlog);
           
        }
    })

};


  return (
    <>
      <SectionTitle title={"Upload Blog"} />
      <section>
        <div className="custom-container">
          
          <div className="custom-row">
            <div className="custom-column">
              <img src={blog} className="custom-image" />
            </div>
            <div className="custom-column">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Blog Title"
                  {...register("blogName", { required: true, maxLength: 120 })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="file"
                  
                  {...register("blogImage", { required: true })}
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Blog Description"
                  {...register("blogDescription", { required: true })}
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <div className="form-control mt-6 flex">
                <input
                  type="submit"
                  value="Submit"
                  className="btn color font-bold"
                />
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadBlog;
