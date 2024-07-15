const myAPI = "http://localhost:3001/videos";

// Função para buscar dados da API
const fetchAPI = async () => {
  try {
    const response = await fetch(myAPI);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data; // Retornar diretamente os dados da API
  } catch (error) {
    console.error("Failed to fetch data from API:", error);
    throw error; // Lançar o erro para que seja tratado no ponto de chamada
  }
};

// Função para obter a lista de vídeos categorizados
const getHomeList = async () => {
  try {
    const videos = await fetchAPI();

    const filterVideosByCategory = (category) => {
      return videos.filter((video) => video.categories.includes(category));
    };

    return [
      {
        slug: "frontEnd",
        title: "Front End",
        items: filterVideosByCategory("frontEnd"),
      },
      {
        slug: "backEnd",
        title: "Back End",
        items: filterVideosByCategory("backEnd"),
      },
      {
        slug: "mobile",
        title: "Mobile",
        items: filterVideosByCategory("mobile"),
      },
    ];
  } catch (error) {
    console.error("Failed to get home list:", error);
    return [];
  }
};

export default {
  getHomeList,
};
