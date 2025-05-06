import React from 'react';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { FileUploadProps } from '../../utilities/interfaces';
import { FileUploadIconSVG } from '../../utilities/svg';

const FileUpload: React.FC<FileUploadProps> = ({
    uploadUrl,
    multiple = true,
    customText,
    onUploadSuccess,
    onUploadError,
    onFilesDropped
}) => {
    const uploadProps: UploadProps = {
        name: 'file',
        multiple,
        action: uploadUrl,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                onUploadSuccess?.(info.file);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
                onUploadError?.(info.file);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
            onFilesDropped?.(e.dataTransfer.files);
        },
    };

    return (
        <div className="upload-container">
            {customText?.title && (
                <h3 className="upload-title">{customText.title}</h3>
            )}
            <div className="upload-box">
                <Upload.Dragger {...uploadProps} className="custom-upload-dragger" aria-label={customText?.label || "Upload document area"}>
                    <div className="upload-content">
                        <FileUploadIconSVG />
                        <span className="upload-text">
                            {customText?.uploadText || "Upload Documents"}
                        </span>
                    </div>
                </Upload.Dragger>
            </div>
        </div>
    );
};

export default FileUpload;