 
 export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':'1d93e0bfc7msh3bc3d0157bbbf92p119ef2jsn42f214455342',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
 export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;

 }  