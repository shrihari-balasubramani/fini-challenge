import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

HighchartsSankey(Highcharts);


export const SankeyChart = ({ options }: any) => {

    return <HighchartsReact highcharts={Highcharts} options={options} />
}