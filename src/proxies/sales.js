import { ENV }
from "../common/constants/env.js";

import {
    createServiceProxy
}
from "../common/helpers/proxy.js";

export default
createServiceProxy(
    ENV.SERVICES.SALES,
    "/api/sales"
);
