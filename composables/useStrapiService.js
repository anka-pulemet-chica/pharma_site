export const useStrapiService = () => {
    const { findOne } = useStrapi()
  
    const fetchData = async (endpoint, locale, filters = {}) => {
      try {
        let populate='*';
        const data = await findOne(endpoint, {
            locale,
            populate,
            filters
          })    
        return data
      } catch (error) {
        console.error('Failed to fetch data from Strapi:', error)
        return null
      }
    }
  
    return {
      fetchData,
    }
  }