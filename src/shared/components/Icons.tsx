import React, { MouseEventHandler, ReactNode } from 'react';

interface IconProps {
    name: string;
    className?: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
    const { name } = props;
    switch (name) {
        case 'knife':
            return <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.01" width="56" height="56" fill="white" />
                <path d="M11.0234 46.2289C9.93441 47.316 9.93624 49.0846 11.0288 50.1788C12.123 51.2714 13.8917 51.2731 14.9805 50.1844L23.6829 41.4822L19.7255 37.525L11.0234 46.2289Z" fill="white" />
                <path d="M54.2807 13.3726L46.4311 21.2493L45.1201 19.9338L52.7092 11.7941L51.9738 11.0562L43.807 18.6162L42.494 17.3004L50.1175 9.19507L49.3244 8.39758L41.1828 15.9829L39.8698 14.6651L47.7191 6.78833L46.9351 6C46.9351 6 39.5451 11.8138 35.8966 14.8145C34.6176 15.8638 34.103 17.6404 34.2822 19.2911C34.528 21.523 34.7987 22.3888 33.895 23.2959L26.239 30.9764C16.4183 21.1179 5.66828 10.329 4.56159 9.23455C3.91059 8.59014 2.97761 8.59014 2.39313 9.17699C0.355648 11.2217 6.50775 23.4365 14.612 33.6746C16.3017 31.97 17.839 30.4364 17.839 30.4364L37.5219 50.1858C38.7396 51.4082 40.5119 51.1255 41.4466 50.1858H41.4483C42.5317 49.0988 42.5317 47.333 41.4483 46.2457C39.3655 44.156 35.0964 39.8683 30.1764 34.9273L37.8245 27.2522C38.7432 26.3307 39.5915 26.6134 41.8161 26.8742C43.4858 27.0705 45.3137 26.5666 46.3668 25.2544C49.3334 21.5481 55.0001 14.0928 55.0001 14.0928L54.2807 13.3726Z" fill="white" />
            </svg>;
        case 'cup':
            return <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect opacity="0.01" width="56" height="56" fill="white" />
                <g clip-path="url(#clip0_0_169)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45 12.0464C42.7853 12.0464 40.9036 10.3071 40.9036 8H15.1486C15.1486 10.304 13.2163 12.0464 11 12.0464V14.6671H45V12.0464ZM12.7004 17.9999L17.9067 48H38.2008L43.3013 17.9999H12.7004ZM39.2861 21.3264L38.1519 28H17.954L16.8198 21.3264H39.2861ZM20.7872 44.6672L19.6532 38.0001H36.4528L35.3203 44.6672H20.7872Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_0_169">
                        <rect width="34" height="40" fill="white" transform="translate(11 8)" />
                    </clipPath>
                </defs>
            </svg>;

    }
};

export default Icon;