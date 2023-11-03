const Filter = ({ onFilterTitleChange }) => {
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
       
        
      />
    </div>
  );
};

export default Filter;
