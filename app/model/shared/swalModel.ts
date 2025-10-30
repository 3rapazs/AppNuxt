type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'
type SweetAlertPosition =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'top-left'
    | 'top-right'
    | 'center'
    | 'center-start'
    | 'center-end'
    | 'center-left'
    | 'center-right'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-left'
    | 'bottom-right'
class swalModel {
    public title: string = "";
    public showConfirmButton: boolean = false;
    public timer: number = 0;
    public position: SweetAlertPosition = "top-end";
    public icon: SweetAlertIcon = "success"
    public text: string = "";
    public footer: string = "";
    public imageUrl: string = "";
    public imageHeight: number = 0;
    public imageAlt: string = "";
    public draggable: boolean = false;
}

export default swalModel;