import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import {Store} from '@ngrx/store';
import {CategoryType} from '../../product/model/category-type.enum';
import {selectProductType} from '../../product/store/actions/product.actions';

@Component({
  selector: 'pps-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  items: MegaMenuItem[];
  CategoryType = CategoryType;
  selectedItems = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: '生鲜冷藏',
        items: [
          [
            {
              label: '蔬菜水果',
              items: [
                {
                  label: '蔬菜', command: () => {
                    this.store.dispatch(selectProductType({selectType: CategoryType.VEGES}));
                    this.selectedItems.push('蔬菜');
                    console.log(this.selectedItems);
                  }
                },
                {label: '水果'}]
            },
            {
              label: '综合分类A2',
              items: [{label: '综合分类A2.1'}, {label: '综合分类A2.2'}]
            }
          ],
          [
            {
              label: '综合分类A3',
              items: [{label: '综合分类A3.1'}, {label: '综合分类A3.2'}]
            },
            {
              label: '综合分类A4',
              items: [{label: '综合分类A4.1'}, {label: '综合分类A4.2'}]
            }
          ]
        ]
      },
      {
        label: '特色美食',
        items: [
          [
            {
              label: '速食',
              items: [
                {label: '披萨', command: () => this.store.dispatch(selectProductType({selectType: CategoryType.FASTFOOD}))},
                {label: '综合分类B1.2'}]
            },
            {
              label: '综合分类B2',
              items: [{label: '综合分类B2.1'}, {label: '综合分类B2.2'}]
            },
          ],
          [
            {
              label: '综合分类B3',
              items: [{label: '综合分类B3.1'}, {label: '综合分类B3.2'}]
            },
            {
              label: '综合分类B4',
              items: [{label: '综合分类B4.1'}, {label: '综合分类B4.2'}]
            }
          ],
          [
            {
              label: '综合分类B5',
              items: [{label: '综合分类B5.1'}, {label: '综合分类B5.2'}]
            },
            {
              label: '综合分类B6',
              items: [{label: '综合分类B6.1'}, {label: '综合分类B6.2'}]
            }
          ]
        ]
      },
      {
        label: '零食',
        items: [
          [
            {
              label: '糖果巧克力',
              items: [
                {label: '糖果', command: () => this.store.dispatch(selectProductType({selectType: CategoryType.CANDY}))},
                {label: '综合分类C1.2'}]
            },
            {
              label: '综合分类C2',
              items: [{label: '综合分类C2.1'}, {label: '综合分类C2.2'}]
            }
          ],
          [
            {
              label: '综合分类C3',
              items: [{label: '综合分类C3.1'}, {label: '综合分类C3.2'}]
            },
            {
              label: '综合分类C4',
              items: [{label: '综合分类C4.1'}, {label: '综合分类C4.2'}]
            }
          ]
        ]
      }
    ];
  }

  remove(selectedItem: string): void {
    const index = this.selectedItems.findIndex(item => item === selectedItem);
    this.selectedItems.splice(index, 1);
    this.store.dispatch(selectProductType({selectType: null}));
  }
}
