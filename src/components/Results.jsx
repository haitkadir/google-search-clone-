import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();
    
    useEffect(() => {
        getResults('/search/q=Javascript Mastery&num=40');
    }, []);

    if(isLoading) return <Loading />
    console.log(location.pathname);

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({link, title}, index) => (
                        <div key={index} className=" w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        
        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.image_results?.map(({image, link: {href, title}}, index) => (
                        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )

        case '/news':
            return 'news';

        case '/videos':
            return 'SEARCH';

        default:
            return 'ERROR';
    }
}
