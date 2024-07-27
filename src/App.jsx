import { useState,useEffect } from 'react'
import Head from './components/Head';
import Hero from './components/Hero';
import Filter from './components/Filter';
import Search from './components/Search';
import Footer from './components/Footer';
import RetreatCard from './components/RetreatCard';
import Pagination from './components/Pagination';

function App() {
  const [retreat, setRetreats] = useState([]);
  const [filters, setFilters] = useState({ date: '', tag: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRetreats = async () => {
      try {
        const response = await fetch('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
        const data = await response.json();

        let filteredData = data;

        if (filters.date) {
          filteredData = filteredData.filter(retreat =>
            new Date(retreat.date).toISOString().split('T')[0] === filters.date
          );
        }

        if (filters.tag) {
          filteredData = filteredData.filter(retreat => retreat.tag.includes(filters.tag));
        }

        if (searchTerm) {
          filteredData = filteredData.filter(retreat =>
            retreat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            retreat.location.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        const itemsPerPage = 3;
        const offset = (currentPage - 1) * itemsPerPage;
        const paginatedData = filteredData.slice(offset, offset + itemsPerPage);

        setRetreats(paginatedData);
        setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
      } catch (error) {
        console.error('Error fetching retreats:', error);
      }
    };
    fetchRetreats();
  }, [filters, searchTerm, currentPage]);

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...filter }));
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div>
      <Head/>
      <Hero />
      <div className='sm:flex m-6 mb-0 sm:flex-col'><Filter onFilterChange={handleFilterChange}/><Search onSearch={handleSearch}/></div>
      <RetreatCard retreat={retreat}/>
      <Pagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
      <Footer/>
      </div>
    </>
  )
}

export default App
