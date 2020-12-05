import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";

/**
 * Just created a type to repreasent your data
 * with an optional children array
 */
interface PropData {
  prop: string;
  children?: PropData[];
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  getChildren = node => {
    return this.data.getData();
  };

  // The data source needs to be an actual data source type.  Below
  // I used a MatTreeNestedDataSource as properDataSource.  That is
  // what is actually attached to the template.  This I just left in
  // for comparison
  dataSource: any[];
  treeControl = new NestedTreeControl<PropData>(node => node.children);

  topLevelData: PropData[] = [
    {
      prop: "people",
      children: [
        { prop: "foo5" },
        { prop: "foo6" },
        { prop: "foo7" },
        { prop: "foo8" }
      ]
    },
    {
      prop: "people again",
      children: [{ prop: "foo0" }, { prop: "foo1" }, { prop: "foo2" }]
    }
  ];

  properDataSource = new MatTreeNestedDataSource<PropData>();

  constructor(private data: DataService) {
    this.dataSource = this.topLevelData;

    // No need to explicitly connect the treeControl here, it is
    // already bound to the component in the template.  Instead here
    // I'm just setting the data itself.
    this.properDataSource.data = this.topLevelData;
  }

  // Rewritten slightly based on the interface I created.
  hasChild = (_: number, node: PropData) =>
    !!node.children && node.children.length > 0;
}
