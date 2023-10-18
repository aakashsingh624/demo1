import { ProjectType } from "../Enums/projectType";

export const dashboardInfo = [
    {
        name: "Avg. Response Time",
        value: 28,
        prefix: "",
        postfix: "mins",
    },
    {
        name: "Response Rate",
        value: 95,
        prefix: "",
        postfix: "%",
    },
    {
        name: "Delivered on time",
        value: 100,
        prefix: "",
        postfix: "%",
    },
    {
        name: "Order Completion",
        value: 60,
        prefix: "",
        postfix: "%",
    },
];
export const projects = [
    {
        name: "Project 1",
        status: ProjectType.Undelivered,
        price: 30,
        dueOn: "21 Jun 2023",
    },
    {
        name: "Project 2",
        status: ProjectType.Delivered,
        price: 30,
        dueOn: "14 Jun 2023",
    },
    {
        name: "Project 3",
        status: ProjectType.Undelivered,
        price: 30,
        dueOn: "18 Jun 2023",
    },
    {
        name: "Project 4",
        status: ProjectType.Undelivered,
        price: 30,
        dueOn: "20 Apr 2023",
    },
    {
        name: "Project 5",
        status: ProjectType.Completed,
        price: 30,
        dueOn: "12 Jun 2023",
    },
    {
        name: "Project 6",
        status: ProjectType.Undelivered,
        price: 30,
        dueOn: "14 Jun 2023",
    },
];
export const ordersDataDummy = [
    {
        id: 1,
        attorney: "Attorney1",
        client: "Client1",
        name: "Project1 for Client1",
        dueOn: "21 Jun 2023",
        date: "01 Jun 2023",
        total: 320,
        rating: 4,
        status: ProjectType.Completed,
    },
    {
        id: 2,
        attorney: "Attorney2",
        client: "Client2",
        name: "Project2 for Client2",
        dueOn: "20 May 2023",
        date: "18 Apr 2023",
        total: 320,
        rating: 3,
        status: ProjectType.Undelivered,
    },
    {
        id: 3,
        attorney: "Attorney1",
        client: "Client3",
        name: "Project3 for Client3",
        dueOn: "21 Jul 2023",
        date: "21 Mar 2023",
        total: 320,
        rating: 5,
        status: ProjectType.Completed,
    },
    {
        id: 4,
        attorney: "Attorney3",
        client: "Client1",
        name: "Project4 for Client1",
        dueOn: "15 Jul 2023",
        date: "14 Jul 2023",
        total: 320,
        rating: 2,
        status: ProjectType.Completed,
    },
    {
        id: 5,
        attorney: "Attorney4",
        client: "Client4",
        name: "Project4 for Client4",
        dueOn: "28 Jun 2023",
        date: "10 Jun 2023",
        total: 320,
        rating: 4,
        status: ProjectType.Completed,
    },
    {
        id: 6,
        attorney: "Attorney7",
        client: "Client7",
        name: "Project7 for Client7",
        dueOn: "28 Jun 2023",
        date: "10 Jun 2023",
        total: 320,
        rating: 4,
        status: ProjectType.Completed,
    },
];
