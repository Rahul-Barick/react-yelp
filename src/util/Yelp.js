const apiKey = process.env.REACT_APP_API_KEY;
const corsUrl = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
  search: async (term, location, sortBy) => {
    console.log(`Enviornment Variable::: ${process.env.API_KEY}, ${process.env.NODE_ENV}`);
    const response = await fetch(
      `${corsUrl}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (response.ok) {
      const jsonResponse = await response.json();

      if (!jsonResponse && !jsonResponse.businesses) {
        return [];
      }

      const businessDataArray = jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: `${business.location.address1} ${business.location.address2}`,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
      return businessDataArray;
    }
  },
};

export default Yelp;
