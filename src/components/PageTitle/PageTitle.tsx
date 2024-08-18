import { iPageTitleProps } from "../../models/models";

function PageTitle({title}: iPageTitleProps) {
  return (
    <div className={'bg-white py-3 px-12 w-[calc(100%+3rem)] -mt-6 -ml-6 shadow-sm mb-6'}>
      <h1 className={'text-gray-800 text-3xl font-bold'}>{title}</h1>
    </div>
  )
}

export default PageTitle;
