import { useState, useEffect } from 'react';

function ListaPaises({ area, setArea }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchAreas();
  }, []);


  const fetchAreas = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = await response.json();
      if (data.meals) {
        setAreas(data.meals.map(areaObj => areaObj.strArea));
      }
    } catch (error) {
      console.error("Hubo un error al obtener las áreas:", error);
    }
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  return (
    <select value={area} onChange={handleAreaChange}>
    {areas.map(areaOption => <option key={areaOption} value={areaOption}>{areaOption}</option>)}
  </select>
  );
}

export default ListaPaises;
