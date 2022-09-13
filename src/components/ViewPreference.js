import listIcon from '../assets/list.png';
import gridIcon from '../assets/grid.png'

export default function ViewPreference(){
  return(
    <div className="flex w-full gap-2 h-8 justify-end items-center">
      <img className='w-auto h-full' alt="grid view" src={gridIcon}/>
      <img className='w-auto h-full' alt="list view" src={listIcon}/>
    </div>
  );
}