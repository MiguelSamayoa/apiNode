
function LogsErrors(err, req, res, next) {
  console.error("Mensaje de Error: "+err.message);
  next(err);
}

function ErrorHandle(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function BoomErrorHandle(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    console.log(output);
    res.status(output.statusCode).json({
      message: "ErrorBoom",
      error: output.payload
    });
  }
  else{
    next(err);
  }
}

module.exports = { LogsErrors, ErrorHandle, BoomErrorHandle};
