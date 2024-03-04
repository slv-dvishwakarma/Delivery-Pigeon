"use client"
import React, { useState } from 'react';
import { Popup } from './Popup';
import { GridBox } from '@/components/GridBox';
import Image from 'next/image';

const images = [
    { url: '/portfolio/media1.png', alt: 'Image 1' },
    { url: '/portfolio/media2.png', alt: 'Image 2' },
    { url: '/portfolio/media3.png', alt: 'Image 3' },
    { url: '/portfolio/media4.png', alt: 'Image 4' },
    { url: '/portfolio/media5.png', alt: 'Image 5' },
    { url: '/portfolio/media6.png', alt: 'Image 6' },
];

export const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto px-6 pt-28 pb-28">
            <GridBox columns={3} gap={6}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        className='cursor-pointer shadow-[rgba(149,157,165,0.2)_0px_8px_24px] aspect-square object-contain rounded-lg border-2 border-solid border-slate-300 portfolio'
                        src={image.url}
                        alt={image.alt}
                        onClick={() => openModal(image.url)}
                        width={724}
                        height={581}
                    />
                ))}
            </GridBox>
            {isModalOpen && <Popup imageUrl={selectedImage!} onClose={closeModal} />}
        </div>
    );
};
