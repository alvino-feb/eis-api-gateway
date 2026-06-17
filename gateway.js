import app
from "./src/app.js";

import { ENV }
from "./src/common/constants/env.js";

app.listen(
  ENV.PORT,
  () => {

    console.log(
      `Gateway running on ${ENV.PORT}`
    );

  }
);