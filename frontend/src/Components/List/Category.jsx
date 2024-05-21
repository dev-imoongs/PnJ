import React, { useState } from 'react';
import '../../style/List.css';
import '../../style/List2.css';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../store/postListReducer';

function Category() {
    const dispatch = useDispatch();

    const [activeBtn, setActiveBtn] = useState(0);

    const handleSelectCategory = (category, i) => {
        setActiveBtn(i);
        dispatch(selectCategory(category.value));
    };

    const categories = [
        { name: '전체' },
        { name: '스터디해요', value: 'study' },
        { name: '정보 공유', value: 'info' },
        { name: 'Q&A', value: 'qa' },
    ];

    const StDefaultBtn = {
        position: 'relative',
        height: '32px',
        borderRadius: '9999px',
        padding: '0px 12px',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px',
        boxSizing: 'border-box',
        border: '0 solid #e5e7eb',
    };

    const StActive = {
        color: '#fff',
        fill: '#fff',
        backgroundColor: '#1d1d1e',
    };

    const StInactive = {
        color: '#1d1d1e',
        fill: '#1d1d1e',
        backgroundColor: '#fff',
        borderWidth: '1px',
        borderColor: '#e6e6e7',
    };

    const StStatic = { position: 'static' };

    const style = {
        transitionDuration: '0ms',
        transform: 'translate3d(0px, 0px, 0px)',
    };

    return (
        <div className="relative">
            <div
                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                style={StStatic}
                draggable="true"
            >
                <div className="swiper-wrapper" style={style}>
                    {categories.map((category, i) => (
                        <div className="swiper-slide swiper-slide-active !w-auto !ml-[16px] md:!ml-[0] mr-[12px] shrink-0 relative">
                            <li key={category.value} className="shrink-0">
                                <div>
                                    <button
                                        aria-label="category chip"
                                        style={
                                            activeBtn === i
                                                ? { ...StDefaultBtn, ...StActive }
                                                : { ...StDefaultBtn, ...StInactive }
                                        }
                                        type="button"
                                        onClick={() => handleSelectCategory(category, i)}
                                    >
                                        {category.name}
                                    </button>
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
