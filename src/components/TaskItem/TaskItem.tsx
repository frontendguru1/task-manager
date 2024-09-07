import editIcon from '../../assets/img/edit.svg';
import deleteIcon from '../../assets/img/delete.svg';
import completeIcon from '../../assets/img/complete.svg';
import { iSingleTaskItemProps } from '../../models/models';

function TaskItem({task, onComplete, onEdit, onDelete}: iSingleTaskItemProps) {
  return (
    <li className={`rounded-md shadow ${task?.isCompleted ? 'bg-green-100' : 'bg-white'}`}>
      <div className={'p-4'}>
        <div className={'flex justify-between'}>
          <div className={'text-[11px] bg-orange-300 rounded py-1 px-2'}>{task.category}</div>
          <div className={'flex align-baseline gap-3'}>
            <button 
              title={'Edit Task'}
              className={'border-none focus:border-none outline:none'}
              onClick={() => onEdit(task)}
              >
                <img src={editIcon} alt="edit" className={'w-5 h-auto opacity-70 hover:opacity-100'} />
              </button>
            <button
              title={'Delete Task'}
              className={'border-none focus:border-none outline:none'}
              onClick={()=> onDelete(task)}
              >
                <img src={deleteIcon} alt="delete" className={'w-5 h-auto opacity-70 hover:opacity-100'} />
                </button>
            <button 
              title={'Mark as Complete'}
              className={'border-none focus:border-none outline:none'}
              onClick={()=> onComplete(task)}
              >
                <img src={completeIcon} alt="delete" className={'w-5 h-auto opacity-70 hover:opacity-100'} />
              </button>
          </div>
        </div>
        <h3 className={'mt-3 text-[16px] font-medium text-gray-800'}>{task.title}</h3>
        <p className={'mt-1 text-[14px] font-light text-gray-700'}>
          {task.description}
        </p>
      </div>

      <div className='flex justify-between mt-4 px-4 py-2 border-t border-gray-150'>
        <span className={'text-[13px] text-gray-500'}>Status:</span>
        <span className={'text-[13px] font-medium text-green-600'}>{task.status}</span>
      </div>
    </li>
  )
}

export default TaskItem;
