export const HOUSING_LIST_COMPLETE = 'HOUSING_LIST_COMPLETE';

export const fetchHousings = () => {
    return function( dispatch, getState ) {
        return fetch('https://www.airbnb.fr/api/v2/explore_tabs?key=d306zoyjsyarp7ifhu67rjxn52tv0t20&currency=EUR&locale=fr&refinement_paths%5B%5D=%2Fhomes&is_guided_search=true&_format=for_explore_search_web' )
            .then(response => response.json())
            .then(result => {
                dispatch({
                    type: HOUSING_LIST_COMPLETE,
                    housings: result.explore_tabs[0].sections[0].listings
                });
            })
    };
}

export const HOUSING_DETAIL_COMPLETE = 'HOUSING_DETAIL_COMPLETE';

export const fetchHousingDetail = (id) => {
    return function( dispatch, getState ) {
        dispatch({
            type: HOUSING_DETAIL_COMPLETE,
            housing: getState().housingList.find( housing => housing.listing.id == id )
        });
    };
}