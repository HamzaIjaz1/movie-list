import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import UploadImage from '../../images/download-icon.svg';

const UploadWrapper = styled.div`
  ${tw`w-[100%] h-[100%] p-[24px] border-2 border-dashed border-white rounded-10 flex flex-col items-center justify-center gap-[8px] bg-input cursor-pointer transition-colors duration-300`}
`;
const UploadTitle = styled.p`
  ${tw`text-[14px] leading-[24px] text-white font-normal`}
`;
const HiddenInput = styled.input`
  ${tw`hidden`}
`;
const UploadIcon = styled.img`
  ${tw`w-[24px] h-[24px] object-contain`}
`;
const UploadedImage = styled.img`
  ${tw`object-contain`}
`;

function ImageUploader({ title }) {
    const [fileName, setFileName] = useState(title);
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = React.createRef();
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setImageSrc(URL.createObjectURL(file));
        }
    };
    const handleClick = () => {
        fileInputRef.current.click();
    };
    return (
        <UploadWrapper onClick={handleClick}>
            <HiddenInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            {imageSrc ? (
                <UploadedImage src={imageSrc} alt={fileName} />
            ) : (
                <>
                    <UploadIcon src={UploadImage} alt="icon" />
                    <UploadTitle>{fileName}</UploadTitle>
                </>
            )}
        </UploadWrapper>
    );
}

export default ImageUploader;
