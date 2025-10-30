import Swal from "sweetalert2";
import swalModel from "~/model/shared/swalModel";
class swal {


    public MessageBoxShow(swalModel: swalModel): void {
        Swal.fire({
            position: swalModel.position,
            icon: swalModel.icon,
            title: swalModel.title,
            text: swalModel.text,
            showConfirmButton: swalModel.timer === 0 ? true : swalModel.showConfirmButton,
            timer: swalModel.timer
        });
    }

    public async MessageBoxConfirm(swalModel: swalModel): Promise<boolean> {
        let result: boolean = false;
        const isConfirm = await Swal.fire({
            title: swalModel.title,
            text: swalModel.text,
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true
        })

        if (isConfirm.isConfirmed) {
            result = true;
        }

        return result;
    }

    public MessageBoxErr(swalModel: swalModel): void {
        Swal.fire({
            position: swalModel.position,
            icon: "error",
            title: swalModel.title,
            text: swalModel.text,
            showConfirmButton: swalModel.timer === 0 ? true : swalModel.showConfirmButton,
            timer: swalModel.timer
        });
    }

}
export default swal;
