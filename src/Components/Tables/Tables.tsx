import { Table } from "antd";
import React from "react";

export default function Tables(props: { columns: any; data: any }) {
    return (
        <div>
            <Table columns={props.columns} dataSource={props.data} />
        </div>
    );
}
