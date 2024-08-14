import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import HeadingComponent from '../headingComponent/headingComponent';

const CardWrapper = styled.div`
  ${tw`px-[8px] pt-[8px] rounded-12 bg-background2`}
`;
const CardImage = styled.img`
  ${tw`w-[100%] h-[400px] rounded-12 object-cover`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col px-[8px] py-[16px] gap-[8px]`}
  p:nth-child(1){
    ${tw`text-[20px] leading-[32px] font-medium`}
  }
`;

function MovieCard({movieList}) {
    const {image, name, year} = movieList;
    return (
        <CardWrapper>
            <CardImage src={image} alt={name} />
            <CardContent>
                <HeadingComponent size='p'>
                    {name}
                </HeadingComponent>
                <HeadingComponent size='p'>
                    {year}
                </HeadingComponent>
            </CardContent>
        </CardWrapper>
    )
}

export default MovieCard