import React from 'react'
import { useParams } from 'react-router-dom';
import CenterBannerLayout from '../../components/home/centerBanner/CenterBannerLayout';

const CenterDetail = () => {
    const path = useParams();
    console.log(path.centerId);
    return (
        <div>
            <CenterBannerLayout />
        </div>
    )
}

export default CenterDetail
