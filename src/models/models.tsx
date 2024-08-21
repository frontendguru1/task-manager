export interface iPageTitleProps {
  title: string;
};

export interface iTaskItem {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  isCompleted: boolean;
  startDate: Date;
  endDate: Date;
}

export interface iTaskProps {
  tasks: iTaskItem[];
  onComplete: (task: iTaskItem) => void;
  onEdit: (task: iTaskItem) => void;
  onDelete: (task: iTaskItem) => void;
}

export interface iSingleTaskItemProps {
  task: iTaskItem;
  onComplete: (task: iTaskItem) => void;
  onEdit: (task: iTaskItem) => void;
  onDelete: (task: iTaskItem) => void;
}


// const tasks = [
//   {
//     id: 1,
//     title: 'React - Router Issue',
//     description: 'lorem ipsum dolor sit amet, consectetur adipis',
//     category: 'FrontEnd Development',
//     status: 'Open',
//     isCompleted: false,
//     startDate: '18/08/2024',
//     endDate: '26/08/2024',
//   }
// ]