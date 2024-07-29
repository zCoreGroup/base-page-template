import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { container, link, slash, starFilled } from './styles';

type BreadcrumbsProps = {
    text: string;
    links: Array<{ text: string; link: string }>;
    starImage?: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ text, links, starImage }) => {
    return (
        <Box sx={container}>
            {starImage && <Box component="img" src={starImage} sx={starFilled} alt="Star" />}
            <Link href="/" sx={link}>{text}</Link>
            {links.map((item, index) => (
                <React.Fragment key={index}>
                    <Typography component="span" sx={slash}>/</Typography>
                    <Link href={item.link} sx={link}>{item.text}</Link>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default Breadcrumbs;