import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartType } from "../../Enums/chartType";
function createOptions(data: any, type: number, title: string) {
    const getSubTitle = () => {
        let total = 0;
        data.data.map((el: any) => (total += el.y));
        return "Total : " + total;
    };
    const options: Highcharts.Options = {
        title: {
            text: title,
        },
        subtitle:
            type === ChartType.pie
                ? {
                      useHTML: true,
                      text: getSubTitle(),
                      floating: true,
                      verticalAlign: "middle",
                      y: 0,
                      x: 20,
                  }
                : {},
        series: [
            {
                //@ts-ignore
                type: ChartType[type],
                data: data.data,
                name: type === ChartType.pie ? data.name : data.yLabel,
                innerSize: type === ChartType.pie ? "75%" : "",
                // animation: {
                //     duration: 2000,
                //     // Uses Math.easeOutBounce
                //     easing: "easeOutBounce",
                // },
            },
            // {
            //     type: "line",
            //     data: [
            //         15.9, 61.5, 51.4, 201.2, 180.0, 201.0, 122.6, 132.5, 216.4,
            //         185.1, 85.6, 43.4,
            //     ],
            //     name: "Series DEF",
            //     animation: {
            //         duration: 2000,
            //         // Uses Math.easeOutBounce
            //         easing: "easeOutBounce",
            //     },
            // },
        ],
        xAxis: {
            visible: type === ChartType.pie ? false : true,
            categories: data.xCategories,
            title: { text: data.xLabel, style: { fontWeight: "700" } },
            labels: {
                style: {
                    width: 70,
                    fontSize: "12px",
                    textOverflow: "ellipsis",
                    // whiteSpace: "nowrap",
                },
            },
        },
        yAxis: {
            title: { text: data.yLabel, style: { fontWeight: "700" } },
        },
        // caption: {
        //     text: "<b>The caption renders at the bottom of the chart, and is included if the chart is exported.</b><br><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>",
        //     align: "left",
        //     margin: 15,
        //     style: {
        //         color: "#666666",
        //     },
        //     x: 0,
        //     y: undefined,
        //     verticalAlign: "bottom",
        // },
        chart: {
            alignThresholds: true, //default
            alignTicks: true, //default
            allowMutatingData: true, //default
            // backgroundColor: {
            //     linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
            //     stops: [
            //         [0, "rgb(255, 255, 255)"],
            //         [1, "rgb(200, 200, 255)"],
            //     ],
            // },
            backgroundColor: "transparent",
            borderColor: "#2b345d",
            borderWidth: 0,
            borderRadius: 8, //default
            displayErrors: true,
            events: {},
            height: null, //default null
            // height: (9 / 16 * 100) + '%' // 16:9 ratio
            ignoreHiddenSeries: true,
            inverted: false, //default
            marginLeft: 80,
            marginTop: 40,
            marginRight: 40,
            marginBottom: 100,
            numberFormatter: (param: any) => {
                return Highcharts.numberFormat(param, -1);
            },
            panning: {
                enabled: false,
                type: "xy",
            },

            panKey: "shift",
            zooming: {
                type: "xy",
                resetButton: {
                    position: {
                        // align: 'right', // by default
                        // verticalAlign: 'top', // by default
                        x: 0,
                        y: -30,
                    },
                },
            },
        },
        colors: [
            "#475287",
            "#0d233a",
            "#8bbc21",
            "#910000",
            "#1aadce",
            "#492970",
            "#f28f43",
            "#77a1e5",
            "#c42525",
            "#a6c96a",
        ],
        credits: {
            enabled: false,
            href: undefined,
        },
        legend: {
            enabled: false,
            align: "center", //values : left,center,right
            verticalAlign: "bottom", //values : top,middle,bottom
            alignColumns: true, //default
            backgroundColor: undefined,
            borderColor: "#999999", //default
            borderRadius: 0,
            borderWidth: 0,
            itemDistance: 20, //default
            itemStyle: {
                //default
                color: "#333333",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "bold",
                textOverflow: "ellipsis",
            },
            labelFormat: "{name}",
            layout: "horizontal",
            shadow: false, //default
            // title: {
            //     text: 'Legend <span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
            //     style: {
            //         fontStyle: "italic",
            //     },
            // },
        },
        lang: {
            noData: "<div style='display: flex; align-items:flex-start'><div class='material-icons'>error_outline</div><div>No data available</div></div>",
        },
        noData: {
            style: {
                fontWeight: "bold",
                fontSize: "12px",
                color: "#303030",
            },
        },
        plotOptions: {
            series: {
                borderWidth: 0, //default
                borderColor: "black", //default
                marker: {
                    // enabled: ChartType[type] === "line" ? false : true,
                    radius: 0,
                },
                // lineWidth: 3,
            },
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1,
                    },
                    stops: [
                        //@ts-ignore
                        [0, "rgba(95, 114, 195, 0.5)"],

                        [
                            1,
                            //@ts-ignore
                            "rgba(95, 114, 195, 0)",
                        ],
                    ],
                },

                lineWidth: 1,
            },
        },
    };
    return options;
}
export default function CartesianChart(props: {
    data: any;
    type: number;
    title: string;
}) {
    const options = createOptions(props.data, props.type, props.title);

    return <HighchartsReact highcharts={Highcharts} options={options} />;
}
