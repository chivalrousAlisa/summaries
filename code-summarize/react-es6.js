/**
 * Created by wb-lihoujie on 2017/1/9.
 */

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        title: React.PropTypes.string,
        withDrawClick: React.PropTypes.func
    };

    static defaultProps = {
        title: 'dd',
        withDrawClick: () => {}
    };

    render(){
        return(
            <div>
                fdfadsf
            </div>
        );
    }
    // ��Ŀ�Ͳɹ�һ�� �����ܽ�
    /*
    * �����ﴫ���������ú����������첽���������磺��Ҫ���ݽӿڷ��ص�״̬ȥ����ֱ�ִ�в�ͬ���߼�
    * window.onhashchange = (e) => { #���淢���ı�ʱ������ componentDidMount�ﴦ��
         const projectNo = this.getWindowHashProjectNo();
         this.setState({ selectedProjectNo: projectNo });
         this.onProjectSelect(projectNo);
        };
    * һ���������ͬʱ��д���export�� export ���󣬷���������,�ࣩ������� ����ʱ��import getComponentTemplate��������, *��ָ��һ������ as componentNames������ from '../../components/Common/getComponentTemplate';
    * * �� export const deepCopy = obj => JSON.parse(JSON.stringify(obj));
    * * // д��һ
        export var m = 1;
        export function f() {};

        // д����
         var m = 1;
         export {m};

         // д����
        var n = 1;
        export {n as m};

        function f() {}
        export {f};
    ** ʹ��as�ؼ��֣�������
    * * export function area(radius) {
            return Math.PI * radius * radius;
        }

        export function circumference(radius) {
            return 2 * Math.PI * radius;
        }

        import { area, circumference } from './circle';
        console.log('Բ�����' + area(4));
        console.log('Բ�ܳ���' + circumference(14));

        ����
        import * as circle from './circle';
        console.log('Բ�����' + circle.area(4));
        console.log('Բ�ܳ���' + circle.circumference(14));
    * export default function () { ֻ����һ��Ĭ�����
        console.log('foo');
    } ����ģ����ظ�ģ��ʱ��import�������Ϊ����������ָ���������֡�
        import customName from './export-default';  ע��import�����ô�����
        customName(); /
    * react���֮��̳� class PageApprove extends BasePage ��������㣬������۰�ť�������յ������
    * <div className={classnames({
        [Styles.wrap]: true,
        ['action-showing']: this.state.showing
     })>
     */
}
ReactDOM.render(
 <Page />, document.getElementById('App')
);