import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import project from '../../Images/project.png'
import Swal from "sweetalert2";



const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

const UploadProject = () => {
  const { register, handleSubmit, reset } = useForm();
  
  

  const onSubmit = data => {
      
    console.log(data);
    //these code is for uploading img in the imgbb
    const formData = new FormData();
    formData.append('image', data.projectImage[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {projectName, projectDescription, liveLink, serverLink, clientLink} = data;
            const newProject = {projectName, projectDescription, liveLink, serverLink, clientLink, image:imgURL}
            fetch('http://localhost:5000/projects',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(newProject)
                
            })
            .then(res => res.json())
            .then(data => {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added Project',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(data)});
            // console.log(newProject);
           
        }
    })

};


  return (
    <>
      <SectionTitle title={"Upload Project"} />
      <section>
        <div className="custom-container">
          <div className="custom-row">
            <div className="custom-column">
              <img src={project} className="custom-image"/>
            </div>
            <div className="custom-column">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Project Title"
                  {...register("projectName", { required: true, maxLength: 120 })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Website Live Link"
                  {...register("liveLink", { required: true})}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Server Site Code Link"
                  {...register("serverLink", { required: true})}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Client Site Code Link"
                  {...register("clientLink", { required: true})}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="file"
                  
                  {...register("projectImage", { required: true })}
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Project Description"
                  {...register("projectDescription", { required: true })}
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <div className="form-control mt-6 flex">
                <input
                  type="submit"
                  value="Submit"
                  className="btn text-gray custom-background custom-button-2 font-bold"
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

export default UploadProject;
