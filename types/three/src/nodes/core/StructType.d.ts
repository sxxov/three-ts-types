import { MemberLayout } from "./StructTypeNode.js";
declare class StructType<
    Name extends string = string,
    Members extends MemberLayout[] = MemberLayout[],
> {
    name: Name;
    members: Members;
    output: boolean;
    constructor(name: Name, members: Members);
}
export default StructType;
