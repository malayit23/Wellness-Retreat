import React,{useState} from 'react'

const Filter = ({onFilterChange}) => {
    const [date, setDate] = useState('');
  const [tag, setType] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onFilterChange({ date: e.target.value });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onFilterChange({ tag: e.target.value });
  };
  return (
    <>
        <div className='sm:space-x-2  flex flex-col sm:block mb-4'>
            <select className='bg-gray-100 py-2 px-4 rounded-md cursor-pointer text-black border-[1px] border-gray-300 mb-4 font-semibold ' value={date} onChange={handleDateChange}>
                <option value="">Filter by Date</option>
                <option value="2023,2024">2023-2024</option>
                <option value="2024,2025">2024-2025</option>
            </select>
        
            <select className='bg-gray-100 py-2 px-4 rounded-md cursor-pointer text-black border-[1px] border-gray-300 font-semibold' value={tag} onChange={handleTypeChange}>
                <option value="">Filter by Type</option>
                <option value="yoga">Yoga</option>
                <option value="meditation">Meditation</option>
                <option value="detox">Detox</option>
            </select>
        </div>
    
    </>
  )
}

export default Filter