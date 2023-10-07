import "./input.css"
//NAMED EXPORT
export function Click(){
    return(
        <div>
            <input className="Input" placeholder="Enter deatil"></input>
        </div>
    );

}

// export default Click

//NAMED EXPORT
export function Checker(){
    return(
        <div>
            <input type="checkbox"/>
        </div>
    );
}

export function My(){
    return(
        <div>
            <table>
        <thead>
            <tr>
                <th>S.Name</th>
                <th>S.Roll No</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dilip</td>
                <td>820649093</td>
                <td>68.21</td>
            </tr>
            <tr>
                <td>Sudhanshu</td>
                <td>820649095</td>
                <td>73.56</td>
            </tr>
            <tr>
                <td>Mallinath</td>
                <td>820649089</td>
                <td>72.11</td>
            </tr>
        </tbody>
    </table>
        </div>
    );
}