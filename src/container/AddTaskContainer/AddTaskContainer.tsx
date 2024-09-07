import { SyntheticEvent, useEffect, useState } from "react";
import { PageTitle } from "../../components";
import { getExistingTasks } from "../../utils/utils";
import { iTaskItem } from "../../models/models";

const form_data = {
  id: Date.now(),
  title: "",
  description: "",
  category: "",
  isCompleted: false,
  status: "Open",
  startDate: "",
  endDate: "",
}

function AddTaskContainer () {
  const [formData, setFormData] = useState<iTaskItem>(form_data);
  const [tasks, setTasks] = useState(getExistingTasks());

  const labelClass = 'text-md block pb-2 font-medium';
  const inputClass = 'w-full border border-gray-400 rounded text-md p-2';


  
 

  /**
   * Handle Change
   */

  const handleChange = (e:SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value,
      id: Date.now(),
    });
  }

  /**
   * Handle Form Submit
   */
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log(formData);
    setTasks([ ...tasks, formData]);
    setFormData(form_data);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    console.log('All tasks', tasks);
    
  }, [tasks])

  return(
    <>
    <PageTitle title={'Add a new task'} />
    <div className={'bg-white rounded-md shadow p-8'}>
      <form onSubmit={handleFormSubmit}>
        <div className={'py-2'}>
          <label htmlFor="title" className={labelClass}>Title</label>
          <input type="text" name="title" id="title" required className={inputClass} onChange={handleChange} value={formData.title} />
        </div>
        <div className={'py-2'}>
          <label htmlFor="category" className={labelClass}>Category</label>
          <select name="category" id="category" required className={inputClass} value={formData.category} onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="frontend-development">FrontEnd Development</option>
            <option value="backend-development">Backend Development</option>
            <option value="ux-design">UX Design</option>
          </select>
        </div>
        <div className={'py-2'}>
          <label htmlFor="description" className={labelClass}>Description</label>
          <textarea name="description" required id="description" className={`${inputClass} resize-none`} onChange={handleChange} value={formData.description}></textarea>
        </div>

        <div className={'py-2'}>
          <label htmlFor="startDate" className={labelClass}>Start Date</label>
          <input type="date" required name="startDate" id="startDate" className={`${inputClass} resize-none`} onChange={handleChange} value={formData.startDate} />
        </div>

        <div className={'py-2'}>
          <label htmlFor="endDate" className={labelClass}>End Date</label>
          <input type="date" required name="endDate" id="endDate" className={`${inputClass} resize-none`} onChange={handleChange} value={formData.endDate} />
        </div>

        <div className={'py-2'}>
          <label htmlFor="status" className={labelClass}>Status</label>
          <label htmlFor="isCompleted">Completed <input type="checkbox" name="isCompleted" onChange={handleChange} checked={formData.isCompleted} /></label>
        </div>

        <button type="submit" className={'rounded bg-violet-700 hover:bg-violet-900 text-white font-medium text-md py-2 px-8 mt-10'}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default AddTaskContainer;
