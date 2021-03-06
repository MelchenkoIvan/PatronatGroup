import { toast } from 'react-toastify';

const notificationService = {
    Successful() {
        toast.success(`Successful !`);
    },
    BadRequest () {
        toast.error(`Bad Request!`);
    },
    Unauthorised () {
        toast.error(`Unauthorised!`);
    },
    NotFound () {
        toast.error(`Not Found!`);
    },
    SomethingWasWrong (message: string) {
        toast.error(`Something was wrong! Message: ${message}`);
    }
};

export default notificationService;