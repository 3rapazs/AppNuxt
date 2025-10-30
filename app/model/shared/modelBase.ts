
enum EntityStates {
    Add,
    Edit
}

class modelBase {
    public IsValidated: boolean = false;
    public IsValidatedSchema: boolean = false;
    public EntityState: EntityStates = EntityStates.Add;
}

export default modelBase;