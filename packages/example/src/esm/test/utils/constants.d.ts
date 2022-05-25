declare const testSuite: {
    fetchFusePoolData: {
        length: number;
        comptroller: string;
        name: string;
        oracle: string;
        oracleModel: string;
        admin: string;
    };
    getPool: {
        name: string;
        creator: string;
        comptroller: string;
    };
    getMarketsWithData: {
        assetsLength: number;
        responseLength: number;
    };
};
export default testSuite;
