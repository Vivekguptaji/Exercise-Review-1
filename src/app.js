export default (function () {
  let userList = {
    enum: {
      base_url: "https://5dc588200bbd050014fb8ae1.mockapi.io/assessment",
      err_msg: `Something went wrong, please try again after some time.<br><a href=" /
        ">Refresh Page</a>`,
      date_options: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
    },

    loadingEl: document.getElementsByClassName("loading")[0],
    renderUI: function (data) {
      this.loadingEl.classList.remove("loading");
      let mainTemplateHTML = document.getElementById("main_section").innerHTML;
      let template = Handlebars.compile(mainTemplateHTML);

      data.map((item) => {
        item.createdOn = new Date(item.createdAt).toLocaleDateString(
          "en-US",
          this.enum.date_options
        );
        return item;
      });
      data.sort((a, b) => {
        let sort = 0;
        sort = a.name < b.name ? -1 : 1;
        return sort;
      });
      let complieData = template(data);
      document.getElementById("main").innerHTML = complieData;
    },
    renderList: function (url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.indexOf("not") !== -1) {
            throw new Error(this.enum.err_msg);
          }
          this.renderUI(data);
        })
        .catch((err) => {
          this.loadingEl.classList.add("loading_err");
          this.loadingEl.innerHTML = this.enum.err_msg;
        });
    },
    onLoad: function () {
      this.renderList(this.enum.base_url);
    },
  };
  userList.onLoad();
})();
