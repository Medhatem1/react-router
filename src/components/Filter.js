const Filter = ({ onFilterTitleChange , onFilterYearChange}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        
        onChange={onFilterTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
       onChange={onFilterYearChange}
        
      />
    </div>
  );
};

export default Filter;
