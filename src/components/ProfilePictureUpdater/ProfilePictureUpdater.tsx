import React, { useRef, useState, useEffect } from 'react';
import { CameraProfileIconSVG } from '../../utilities/svg';

type Props = {
    imageUrl: string;
    onImageChange: (file: File) => void;
};

const ProfilePictureUpdater: React.FC<Props> = ({ imageUrl, onImageChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string>(imageUrl);

    useEffect(() => {
        setPreviewUrl(imageUrl); // in case parent updates imageUrl externally
    }, [imageUrl]);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
            onImageChange(file);
        }
    };

    return (
        <div className="profile-updater" onClick={handleClick}>
            <div className="avatar-wrapper">
                <img src={previewUrl} alt="Profile" className="avatar-image" />
                <div className="avatar-overlay">
                   <CameraProfileIconSVG />
                </div>
            </div>
            <span className="update-text">Update profile picture</span>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="file-input"
            />
        </div>
    );
};

export default ProfilePictureUpdater;
