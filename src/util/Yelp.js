const apiKey = 'rbDroDpW5iSC4i4msaJc28t2TzKYoUEX3Tm_9ihGRBZJMgMn8FXblaajSwD3V8PbCmvvvUrc0mwkojxJ8rAm9j3HQ4r3w6JlYo733LWKB6h7-IZiUB6VQGM7XIvwXnYx';

const corsUrl = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
  search: async (term, location, sortBy) => {
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
