import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { TickCircleIconSVG } from '../../utilities/svg';

export type NotificationTypes = 'success' | 'error' | 'warning' | 'delete';

export const toastMessage = (type: NotificationTypes, msg: string): void => {
    const config = {
        message: msg,
        placement: "topRight" as NotificationPlacement,
    };

    switch (type) {
        case "success":
            notification.success({
                ...config,
                className: "createdNotification",
                icon: <TickCircleIconSVG />,
            });
            break;
        case "warning":
            notification.warning({
                ...config,
                className: "warningNotification",
            });
            break;
        case "error":
        case "delete":
            notification.error({
                ...config,
                className: "deletedNotification",
            });
            break;
    }
};

export const notificationType: Record<NotificationTypes, NotificationTypes> = {
    success: "success",
    error: "error",
    warning: "warning",
    delete: "delete",
};